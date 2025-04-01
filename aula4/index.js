const inquairer = require(`inquirer`)
const chalk = require(`chalk`)

const fs = require(`fs`)

function operation(){
    inquairer.prompt([
        {
            type:`list`,
            name:`action`,
            menssage:`Escolha uma das opções`,
            choices:[
                `Criar conta`,
                `Consultar saldo`,
                `Depositar`,
                `Sacar`,
                `sair`
            ]
        }
        ]).then((answer)=> {
            const action = answer[`action`]

            if(action === `criar conta`){
                console.log(action)
            }else if(action === `Depositar`){
                console.log(action)
             }else if(action === `Consultar saldo`){
                console.log(action)
             }else if(action === `Sacar`){
                console.log(action)
             }else if(action === `Sair`){
                console.log(`Saindo do sistema...`)
                process.exit()
             }else{
                console.log(`Não valido`)
             }
              

        })
    }