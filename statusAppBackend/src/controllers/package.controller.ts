import { Router } from 'express';
import { PackageModel } from '../models/package.model';
import { createPackage } from '../services/package.service';
import { getPackages } from '../services/package.service';

export const router: Router = Router();

router.post("/packages", async (req, res) => {

    const { priority, packageDetails } = req.body;

    const packageObject = await createPackage(priority, packageDetails);

    res.status(200).json(packageObject)
});

router.get("/getPackages", async (req, res) => {

    // console.log(getPackages)
    res.send( ( await (await getPackages()) ) );

});

