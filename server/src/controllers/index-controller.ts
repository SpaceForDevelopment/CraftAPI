import { Request, Response } from 'express';

export const indexController = async (req: Request, res: Response) => {
    try {
        const duo = 'Artur Bomtempo e Letícia França';
        const idClass = '3D1';
        const subject = 'Framework';
        const school = 'Colégio Cotemig';

        res.status(200).json({
            duo: duo,
            class: idClass,
            subject: subject,
            school: school,
        });
    } catch (error) {
        res.status(500).json({
            message: (error as Error).message,
        });
    }
};
