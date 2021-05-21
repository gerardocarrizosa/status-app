import { Router } from 'express';
import { createPackage } from '../services/package.service';
import { getPackages } from '../services/package.service';
import { PACKAGES_ENDPOINT } from '../const/endpoint';

export const router: Router = Router();

router.post(PACKAGES_ENDPOINT, async (req, res) => {

    try {
        const { priority, packageDetails } = req.body;

        const packageObject = await createPackage(priority, packageDetails);

        return res.status(200).json(packageObject);
    } catch (error) {
        return res.status(500).json({ "messages": error });
    }

});

router.get(PACKAGES_ENDPOINT, async (req, res) => {

    try {
        const packages = await getPackages();

        return res.status(200).json(packages);
    } catch (error) {
        return res.status(200).json({ "message": error });
    }


});

