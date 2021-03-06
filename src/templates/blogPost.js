import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import * as S from '../components/Post/style'
import PaginationPost from '../components/Pagination'

const BlogPost = ({data, pageContext}) => {
    const next = pageContext.next
    const previous = pageContext.previous
    const post = data.markdownRemark

    return(
        <Layout>
            <SEO title={post.frontmatter.title} 
            description={post.frontmatter.description} />
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post.frontmatter.date}
                </S.PostDate>
                <S.PostTitle>
                    {post.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </S.MainContent>
            <PaginationPost next={next} previous={previous}/>
        </Layout>
    )
}

export const query = graphql`
    query blogPost($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                author
                date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                description
                title
            }
            html
        }
    }
    `

export default BlogPost
