module.exports = () => {
    const clients = new map();

    registerClient = (client, user) => {
        clients.set(client.id, { client, user})
    };

    addClient = (client) => {
        clients.set(client.id, { client })
    }

    removeClient = (client) =>{
        clients.delete(client.id)
    }

    getClients = () =>{
        return Array.from(clients.values)
    }
    
    return{
        registerClient,
        addClient,
        removeClient,
        getClients
    }
}