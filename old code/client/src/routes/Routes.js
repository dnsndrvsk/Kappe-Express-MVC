import React from 'react'
import { BrowserRouter,
         Route,
         Switch, 
         Redirect } from 'react-router-dom'
import MainNav from '../components/MainNav'

/* Views */
import Home from '../views/Home'
import CardView from '../views/CardView'
import GalleryPostView from '../views/GalleryPostView'
import StandartPostView from '../views/StandartPostView'
import VideoPostView from '../views/VideoPostView'
import About from '../views/About'
import Blog from '../views/Blog'
import Contact from '../views/Contact'
import Services from '../views/Services'
import UnderConstruction from '../views/UnderConstruction'
import PageNotFound from '../views/404'



const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <MainNav />
        <div className="page-content">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/home/works/:id" component={CardView} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/post/gallerypost/:id" component={GalleryPostView} />
            <Route path="/blog/post/standartpost/:id" component={StandartPostView} />
            <Route path="/blog/post/videopost/:id" component={VideoPostView} />
            <Route path="/services" component={Services} />
            <Route path="/updates" component={UnderConstruction} />
            <Redirect from="/" to="/home" />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
} 

export default Routes