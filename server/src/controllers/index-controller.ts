import { Request, Response } from 'express';

export const getIndex = (req: Request, res: Response) => {
    const duo = 'Artur Bomtempo e Letícia França';
    const idClass = '3D1';
    const subject = 'Framework';
    const school = 'Colégio Cotemig';

    res.status(200).json({
        duo: duo,
        class: idClass,
        subject: subject,
        school: school
    });
}