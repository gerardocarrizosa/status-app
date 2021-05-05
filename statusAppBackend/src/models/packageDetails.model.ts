import { model, Model, Schema } from 'mongoose';
import { IPackageDetails } from '../types/packageDetails.type'

const ObjectId = Schema.Types.ObjectId;

const packageHistorySchema = new Schema({
    modifyDate: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        require: true,
        enum: ['llegada', 'transito', 'enviado']
    }
});

const packageDetailsSchema = new Schema({
    package: {
        type: ObjectId,
        require: true
    },
    label: {
        type: String,
        enum: ['quimico', 'flamable', 'delicado'],
        require: true
    },
    packageHistory: [packageHistorySchema],
    creationDate: {
        type: Date,
        require: true
    }
});

export const PackageDetailModel: Model<IPackageDetails> = model('PackageDetails', packageDetailsSchema);