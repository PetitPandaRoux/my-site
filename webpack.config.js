module.exports={
    entry:"/Users/usermkl/Desktop/Perso/monProjet/my-site/app/assets/scripts/App.js",
    output:{
        path:"/Users/usermkl/Desktop/Perso/monProjet/my-site/app/temp/scripts",
        filename:"App-bundle.js"
    },

    module:{
        loaders:[
            {
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                },
                //Indique qu'on utilise babel uniquement sur javascript
                test:/\.js$/,
                //Enfin pas tous les fichiers js(pas besoin de convertir la librairie jquery par exemple).
                exclude:/node_modules/
         }
        ]
    }
}
