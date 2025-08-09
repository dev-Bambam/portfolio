import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IBioService } from '../Types/bio.types';


const BioService = container.resolve<IBioService>('IBioService');

export const createBio = async (req: Request, res: Response) => {
  const bioData = req.body;
  const bio = await BioService.createBio(bioData);
  res.status(200).json({
    status: 'success',
    data: {
      bio,
    },
  });
};
    
export const getBio = async (req: Request, res: Response) => {
  const bio = await BioService.getBio();
  res.status(200).json({
    status: 'success',
    data: {
      bio,
    },
  });
};

export const updateBio = async (req: Request, res: Response) => {
  const bioData = req.body;
  const bio = await BioService.update(bioData);
  res.status(200).json({
    status: 'success',
    data: {
      bio,
    },
  });
};