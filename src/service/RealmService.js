import Realm from 'realm'
import { RealmSchema } from './Schemes';


let SCHEMA_VERSION = 2

function findAll(schemaName) {
    let realm = new Realm({
        schema: RealmSchema,
        schemaVersion: SCHEMA_VERSION
    })

    let allObjects = realm.objects(schemaName)
    return(allObjects)
}

function findAllNotRemoved(schemaName, sort, invert, secondSort, secondInvert) {
    let realm = new Realm({
        schema: RealmSchema,
        schemaVersion: SCHEMA_VERSION
    })

    let objectsToReturn = realm.objects(schemaName).filtered("removido=false")
    if (objectsToReturn.length==0) {
        return []
    } else {
        if (sort!==undefined) {
            if (invert!==undefined) {
                if (secondSort!==undefined) {
                    objectsToReturn = objectsToReturn.sorted(sort, invert).sorted(secondSort, invert)                    
                } else {
                    objectsToReturn = objectsToReturn.sorted(sort, invert)
                }
            } else {
                if (secondSort!==undefined) {
                    objectsToReturn = objectsToReturn.sorted(sort, false).sorted(secondSort, secondInvert)                    
                } else {
                    objectsToReturn = objectsToReturn.sorted(sort, false)
                }
            }
        }
        return objectsToReturn
    }
}

function findFirstByFilter(schemaName, filter, sort) {
    let realm = new Realm({
        schema: RealmSchema,
        schemaVersion: SCHEMA_VERSION
    })  

    let objects = realm.objects(schemaName)
    if (sort!==undefined) {
        objects = objects.sorted(sort, false)
    }
    let objectsToReturn = objects.filtered(filter)[0]
    
    return objectsToReturn
}

function saveThis(schemaName, object) {
    let realm = new Realm({
        schema: RealmSchema,
        schemaVersion: SCHEMA_VERSION
    });
    let objectToSave = object
    objectToSave.updatedAt = new Date()
    
    realm.write(() => {
        realm.create(schemaName, objectToSave)
    })
}

function updateThis(schemaName, object, fields) {
    let realm = new Realm({
        schema: RealmSchema,
        schemaVersion: SCHEMA_VERSION
    });

    let objectExist = realm.objectForPrimaryKey(schemaName, object.mid)

    realm.write(() => {
        fields.map((it) => {
            objectExist[it] = object[it]
        })
    })
}

function deleteThis(schemaName, mid) {
    let realm = new Realm({
        schema: RealmSchema,
        schemaVersion: SCHEMA_VERSION
    })

    realm.write(() => {
        let objectExist = realm.objectForPrimaryKey(schemaName, mid)
        realm.delete(objectExist)
    })
}

function getNextMid(schemaName) {
    let mid = 0
    let realm = new Realm({
        schema: RealmSchema,
        schemaVersion: SCHEMA_VERSION
    });    

    realm.objects(schemaName).forEach(element => {
        if (element.mid>mid) {
            mid = element.mid
        }
    });

    return mid+1
}


export {
    findAll,
    findAllNotRemoved,
    findFirstByFilter,
    saveThis,
    deleteThis,
    updateThis,
    getNextMid
}