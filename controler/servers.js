

const servers = [
{id:'1', name:"Nokia", country: "Finland"},
{id:'2', name:"Samsung", country: "Korea"},
{id:'3', name:"Iphone", country: "USA"},
{id:'4', name:"XIOMI", country: "China"}
]

export const getAll =(res,req)=>{
req.status(200).json(servers)
}
export const create = (res,req)=>{
    const newServer ={
        id: Date.now().toString(),
        ...res.body
    }
servers.push(newServer)
req.status(201).json(newServer)
}

export const remove =(res,req)=>{
    servers = servers.filter(s=>s.id !== res.params.id)
    req.json({massenge: "Items delete"})
}