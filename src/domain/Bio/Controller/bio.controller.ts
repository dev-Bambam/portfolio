import { Request, Response } from "express";
import { container } from "tsyringe";
import { IBioService } from "../Types/bio.types";


const BioService = container.resolve<IBioService>('IBioService')

