// interface Storage {}  
// ㄴ 타입스크립트에 의해 이미 선언된 자바스크립트의 웹 스토리지 api를 위한 인터페이스

interface SStorage<T> { // 타입 매개변수 'T'를 받음
    [key:string]: T 
    // 인덱스 시그니처 : 모든 문자열 키에 대한 값의 타입이 'T'인 속성을 가질 수 있음
    // key가 제한되지 않은 오브젝트를 정의하게 해줌
}

class LocalStorage<T> { 
    // TS에게 T라고 불리는 제네릭 <T>을 받을 계획이라고 알려줌
    // 제네릭은 다른 타입에게 물려 줄 수 있음
    private storage: SStorage<T> = {}
    set(key:string, value: T) {
        this.storage[key] = value;
    }
    remove(key:string) {
        delete this.storage[key]
    }
    get(key:string):T { // string을 보내주고 T를 받는다
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<string>()
stringStorage.get("ket")
stringStorage.set("hello", "how are you")

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("xxx")
booleanStorage.set("hello", true)

// challenge
// LocalStorage API -> 추상화 클래스, 제네릭을 사용
interface LocalStorageAPI<T> {
    [key:string]: T 
}

abstract class LocalStorageA<T> {
    protected storage: LocalStorageAPI<T> = {};

    abstract setItem(key: string, value: T): void;
    abstract getItem(key: string): T | undefined;
    abstract clearItem(key: string): void;
    abstract clear(): void;
}

class LocalStorageB extends LocalStorageA<string> {
    setItem(key:string, value: string) {
        this.storage[key] = value;
    }

    getItem(key:string):string {
        return this.storage[key];
    }

    clearItem(key:string) {
        delete this.storage[key];
    }

    clear() {
        this.storage = {};
    }
}

const myLocalStorage = new LocalStorageB();
myLocalStorage.setItem("key", "value")
myLocalStorage.getItem("key")
myLocalStorage.clearItem("key")
myLocalStorage.clear()

// Geolocation API -> 오버로딩
interface GeolocationAPI {
    successFn: (position: GeolocationPosition) => void;
    errorFn?: (error: GeolocationPositionError) => void;
    optionsObj?:Options;
}

interface Options {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;

}

class GGeolocation {
    getCurrentPosition(geolocationApi: GeolocationAPI): void {
        const { successFn, errorFn, optionsObj } = geolocationApi;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
        }
    }

    watchPosition(geolocationApi: GeolocationAPI): number {
        const { successFn, errorFn, optionsObj } = geolocationApi;

        if (navigator.geolocation) {
            return navigator.geolocation.watchPosition(successFn, errorFn, optionsObj);
        } else {
            return -1;
        }
    }

    clearWatch(id: number): void {
        if (navigator.geolocation) {
            navigator.geolocation.clearWatch(id);
        } 
    }
}
