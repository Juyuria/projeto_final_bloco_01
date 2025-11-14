export interface Repository<T> {
    create(item: T): void;    
    update(item: T): void;    
    delete(id: number): void;
    find(id: number): T | undefined;  
    findAll(): T[];           
}