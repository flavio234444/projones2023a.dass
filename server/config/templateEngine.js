import { ESLint } from 'eslint';
import { Engine as exphbs } from `express-handlebars/types`;
import PAth from 'path' ; 
//crear una fila funcion de configuracion 
// que exportareos po defecto  
export default(app)=>{
    //AGRGANDO UNA NUEVA MOTORDE PLANTILLAS  
    //compatible con console.js 
    app.engine(
'hbs', 
exphbs({
    //Definir la extencion de la plantilla 
    extname: '.hbs',
    //Establecimiento en el layout por defecto
    defaultLayout: 'main',
}),
);

//selecionado el motor de plantillas que integramos  
//anterior mente 
app.set}
