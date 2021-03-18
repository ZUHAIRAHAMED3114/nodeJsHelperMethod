const fs = require('fs');
const newpath = require('path');

deleteDirectorySynchronously = (path) => {
    if (fs.statSync(path).isDirectory()) {

        fs.readdirSync(path).forEach(file => {
            let newPath = newpath.join(path, file)
            console.log(newPath)
            deleteDirectorySynchronously(newPath)

        })

        fs.rmdirSync(path);


    } else {

        fs.unlinkSync(path)

    }

}

deleteDirectorySynchronously('C:\\Users\\shaik zuhair ahamed\\OneDrive\\Desktop\\marchProject\\shopingCard\\shoppoingCard_easyLearning\\public\\product_image\\6051c910b9fea87454efbac4');