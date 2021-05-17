import { PackageModel } from '../models/package.model'
import { PackageDetailModel } from '../models/packageDetails.model';
import { IPackage } from '../types/package.type'
import { PackageDetailsReq } from '../types/packageDetails.type'

export const createPackage = async (priority: 'bajo' | 'medio' | 'alto', packageDetails: PackageDetailsReq): Promise<IPackage> => {

    const packageDocument = new PackageModel({
        status: 'llegada',
        priority: priority,
        packageDetails: null
    });

    const packageDetailsDocument = new PackageDetailModel({
        package: packageDocument._id,
        label: packageDetails.label,
        creationDate: Date.now(),
        packageHistory: [{
            modifyDate: Date.now(),
            status: packageDetails.status
        }]
    });

    packageDocument.packageDetails = packageDetailsDocument._id;

    await packageDetailsDocument.save();
    return await packageDocument.save();
};

export const getPackages = async () => {
    
    return await PackageModel.find({});

};

