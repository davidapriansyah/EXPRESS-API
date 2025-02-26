declare namespace Express{
    interface Request{
        params: any;
        userId: any;
    }
}

//type ini di gunakan ketika menambahkan properti tambahan pada request object ke express dan 
// memudahkan untuk mengaksesnya pada controller atau middleware