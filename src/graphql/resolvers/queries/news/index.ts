import { NewsModel } from './../../../../models/news.model';

export default {
	getNews:()=>{
        return NewsModel.find().sort({createdAt:-1});
    }
    
};
