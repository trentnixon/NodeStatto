/**
 * 
 *  How to Use:
 * 
 *  Create Object with Components in .js page
 *  const Components =[
        {
          COMP:<Comp />,
          CLASS:"Parent Class"
        }
      ]
 * 
 *  Import Page Contaner
 *  Requires Two Props : Components | Titles
 *  Return as such
 *  <PageContaner Titles={[TITLES.SITE.TITLES.BATTING,TITLES.SITE.TITLES.OVERVIEW]} Components={Components} />
 */


import React from 'react';
import Container from "../Page/Container";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./Section_Global_Header";

const PageContainer = (props) => {
  
    return (
        <Container>
            <SectionHeader  h1={props.Titles[0]}  h2={props.Titles[1]}   /> 
            {
                props.Components.map((COMP,i)=>{
                    return(
                        <SectionContainer key={i} className={COMP.CLASS}>
                            {COMP.COMP}
                        </SectionContainer>
                    )
                })
            }
        </Container>
    );
} 

export default PageContainer;