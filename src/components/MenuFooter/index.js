import React from "react"
import formatDate from '../../utils/formatDate'
import { graphql, useStaticQuery } from 'gatsby'
import { MDBBtn, MDBIcon } from 'mdbreact'
const MenuFooter = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                    author
                    socialLinks {
                        link
                        icon
                        color
                    }
                    menuFooter {
                        label
                        link
                    }
                }
            }
        }
    
    `)
    return (

<footer className="page-footer font-small stylish-color-dark pt-4">


<div className="container text-center text-md-left">


  <div className="row">


    <div className="col-md-4 mx-auto">


      <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Descrição</h5>
      <p>{data.site.siteMetadata.description}</p>

    </div>

    <hr className="clearfix w-100 d-md-none" />


    <div className="col-md-2 mx-auto">


      <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Tags</h5>

      <ul className="list-unstyled">
          {data.site.siteMetadata.menuFooter.map((tag, i) => (
            <li key={i}>
              <a href={tag.link}>{tag.label}</a>
            </li>
          ))}
        
      </ul>

    </div>


  </div>


</div>

<hr/>

<ul className="list-unstyled list-inline text-center">
    {data.site.siteMetadata.socialLinks.map((icons, i) => (
        <li className="list-inline-item" key={i}>
          <MDBBtn rounded color={icons.color} style={{borderRadius: '50%', padding: '.7rem 1rem .7rem'}}>
              <MDBIcon size='2x' fab icon={icons.icon} />
          </MDBBtn>
        </li>
    ))}
</ul>
<div className="footer-copyright text-center py-3">{formatDate(Date())} <br />
    Desenvolvedor: {data.site.siteMetadata.author} {` | `} Desenvolvido com <a href="https://www.gatsbyjs.org/"> Gatsby</a>
</div>


</footer>

  );
}

export default MenuFooter