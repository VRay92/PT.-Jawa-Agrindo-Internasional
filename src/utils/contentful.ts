import {createClient} from "contentful"; //import

export const createContentClient = () => { //initial account
    return createClient({
        space: "na0siaro97ek",
        accessToken: "12_wQcyWECFBEe7hgDVFoVoecXjGzZa6CfTR5Tp04l0",
    });
};
const client = createContentClient(); //execute create client

export const getEntriesByType = async (type:any) => { // get data berdasarkan type model
    const response = await client.getEntries({
        content_type:type,
    });
    return response.items;
};

export const getBlogPosts = async () => {
    const results = await getEntriesByType("blogpost");
    const blogPosts = results.map ((blog) => blog.fields); //getarticle by model "blogpost"
    return blogPosts;
}