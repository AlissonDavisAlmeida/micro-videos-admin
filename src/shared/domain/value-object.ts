import  isEqual  from "lodash/isEqual";

export abstract class ValueObject {
   
    // Example method to check equality of value objects
    equals(other: this): boolean {
        if (other === null || other === undefined) {
            return false;
        }

        if (this.constructor.name !== other.constructor.name) {
            return false;
        }

       return isEqual(this, other);
    }
}