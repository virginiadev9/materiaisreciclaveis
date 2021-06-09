import multer from 'multer';
import path from 'path';
import cryto from 'crypto';

export default {
    storage: multer.diskStorage({
        destination:  path.resolve(__dirname,'..','..','uploads'),   //pra onde vao os arquivos que vao ser guardados
        filename(request,file,callback){//de que forma o nome desse arquivo vai ser gravado
            const hash = crypto.getRandomValues.toString();
            const fileName = `${hash}-${file.originalname}`;
            callback(null,fileName);
        }
    })
}