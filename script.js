let menu 
let propertys = []

let property = {}

let ownerName
let roomQuantity
let bathroomQuantity
let garage

do{
    menu = prompt(`Lista de imóveis atuais ${property.lenght}:
    1 - Adicionar novo imóvel
    2 - Listar imóveis salvos
    3 - Sair`
    )

    switch(menu){
        case '1':
        
            ownerName = prompt('Qual é o nome do proprietário do imóvel?')      
            roomQuantity = prompt('Quantidade de quartos do imovél?')  
            bathroomQuantity = prompt('Quantos banheiros o imovél tem?')
            garage = prompt('Teem garagem no imovél?')

            property.owner = ownerName
            property.rooms = roomQuantity
            property.bathroom = bathroomQuantity
            property.garage = garage

            propertys.push(property)

            confirm(`Está tudo certo?
            Proprietário: ${ownerName}
            Quantidade de quartos: ${roomQuantity}
            Quantidade de banheiros: ${bathroomQuantity}
            Se tem garagem: ${garage}`)
            break

        case '2':
            alert(propertys)
            break
        
        case '3':
            alert('Encerrando..')

    }
}while(menu !== '3')
