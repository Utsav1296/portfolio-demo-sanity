import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// vite stores environment variable in import.meta.env
// so,to access ,we must use VITE_ to append our .env
// eg: VITE_REACT_APP_SANITY_PROJECT_ID

// in VITE , we use import.meta.data instead of process.env
// print the below mentioned line inside your DOM to understand more 
// {/* <code>{JSON.stringify((import.meta.env))}</code> */}


export const client = sanityClient({
    projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-12-12', // use current UTC date - see "specifying API version"!
    token: import.meta.env.REACT_APP_SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
})


const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}