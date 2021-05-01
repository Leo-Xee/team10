import { Document, Schema, model } from 'mongoose';

import ArticleType from '../type/ArticleType';

export interface ArticleModel extends ArticleType, Document {}
const ArticleSchema = new Schema(
  {
    articleId: {
      type: String,
      required: true,
      unique: true,
    },
    articleUrl: {
      type: String,
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
    providerName: {
      type: String,
      required: true,
    },
    providerAvatar: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    insertDate: { type: Date, default: new Date() },
    keywords: {
      type: Array,
      default: new Array<string>(),
    },
  },
  {
    versionKey: false,
  }
);
export default model<ArticleModel>('Article', ArticleSchema);
