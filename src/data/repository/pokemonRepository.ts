// 도메인 layer에 정의된 repository를 실제로 구현한다. 

// export class PokemonRepository implements PokemonRepositoryType {
//   private storage: DogamStorageProvider;

//   constructor(
//     private api: PokeApiProvider;
//     private storage: DogamStorageProvider;
//   ) {}

//   catch(pokemon: Pokemon): void {
//     return this.storage.set(pokemon)
//   }

//   call(id: number): Pokemon {
//     return this.storage.get(id);
//   }
// }