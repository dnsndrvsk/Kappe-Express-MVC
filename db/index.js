import mongoose from 'mongoose';
import Promise from 'bluebird';
mongoose.Promise = Promise;


export default (url) => {
  mongoose.connect(url)
    .then(res => {
      console.log(`Connected to ${url}`);
    })
    .catch(error => {
      console.log(error);
    })
}
