import { Document, ObjectId } from 'mongoose';

export interface IPackageDetails extends Document {
    package: ObjectId
    label: 'quimico' | 'flamable' | 'delicado',
    packageHistory: ObjectId
    creationDate: Date
};

// export interface IPackageHistory extends IPackageDetails {
//     _id : ObjectId
// }