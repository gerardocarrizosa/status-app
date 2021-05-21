import { Document, ObjectId } from 'mongoose';

export interface IPackage extends Document {
    status: String;
    priority: 'bajo' | 'medio' | 'alto';
    packageDetails: ObjectId;
};