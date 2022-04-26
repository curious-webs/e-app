import React, {Component} from 'react';
import HomeSlider from './HomeSlider';
import HomePageCategories from './HomePageCategories';
import HomePageBanner from './HomePageBanner';
import HomePageBrands from './HomePageBrands';
import HomePageBlogs from './HomePageBlogs';
import HomePageProducts from './HomePageProducts';

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <HomeSlider />
        <HomePageCategories />
        <HomePageProducts/>
        <HomePageBanner />
        
        <HomePageBrands />
        <HomePageBlogs />
      </React.Fragment>
    );
  }
}

export default Home;
