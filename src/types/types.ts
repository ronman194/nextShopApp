import { ObjectId } from 'mongodb';

export default interface ProductType {
    _id: ObjectId;
    name: string;
    description: string;
    price: number;
    category: string;
    picture: string;
}