import React from "react";
import { Link } from "gatsby";
import Layout from './components/layout';
import Title  from './components/title';

export default () => (
    
    <Layout>
     <Title text= 'About Me'/>
     <div>
         <Link to= "/">Home</Link> | <Link to="/about">About me</Link>
     </div>
     <p>React Component is a reusable piece of javascript code that encapsulates related presentation and logic.
     </p>

    </Layout>
    )
