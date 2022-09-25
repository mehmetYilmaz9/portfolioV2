import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Head from 'next/head';
import { BsGithub } from 'react-icons/bs';

import { ThemeProvider } from "next-themes";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { RoughNotation } from "react-rough-notation";


export default function ProjectsPage  ({repositories})  {

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
    <ContainerBlock title="Projects - Mehmet Yilmaz">
      <section className="bg-white dark:bg-gray-800 ">
          <div className=" grid justify-items-center container mx-auto   md:grid-row">

            <div className="py-4">
              <h3 className="">With the Github API, just display open-source projects</h3>
              <span className="flex justify-center">
              See more :  <RoughNotation type="circle" show={true} padding={9} color="#be1bde" ><a href="https://github.com/mehmetYilmaz9" target="_blank" rel="noopener noreferrer" className=""> Github Page</a> </RoughNotation>
              </span>
            </div>

            <div className="">
              {repositories.map(item => {
                return (
                <div key={item.id} className="flex items-center m-2 p-2 px-4 rounded bg-gray-200 dark:bg-gray-900 ">
                <div  className="m-0">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <BsGithub  className="h-8 w-8  text-gray-800 dark:text-white "  />
                  </a>
                </div>
              
                <div>
                  <h2 className="block text-lg mx-3 font-normal">
                    { item.name }
                  </h2>
                </div>
              
                <div>
                <span className=" text-gray-700" >
                  {item.description} 
                </span>
                </div>
              
              </div>

                )
              })}
            </div>
          </div>
      </section>
     </ContainerBlock>
    </ThemeProvider>
  );
}



export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    {
      user(login: "mehmetYilmaz9") {
        repositories(
          last: 12
          isFork: false
          isLocked: false
          privacy: PUBLIC
          ownerAffiliations: OWNER
        ) {
          edges {
            node {
              description
              id
              name
              url
              languages(last: 3) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    `
  });
  
  const { user } = data;
  const repositories = user.repositories.edges.map(edge => edge.node);
  
  return {
    props: {
      repositories
    }
  }
}
