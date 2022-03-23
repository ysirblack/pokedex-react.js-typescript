type Type = {
  type: {
    name: string
  }
}
type BaseStat = {
  base_stat: string
}
export interface IPokemon {
  status: string;
  data: {
    data: {
      name:string;
      types: Array<Type>
      id: number;
      stats: Array<BaseStat>
      sprites: {
        front_default: string;
      };
    };
  };
}

export interface PokemonStatsProps {
  pokemon: IPokemon;
}

export interface PokeContextType {
  pokename: string;
  hovered: boolean;
  clicked: boolean;
  fetchPokemons: ()=>void;
  fetchPokemonName:(name: string) => void;
  setName: (name: string) => void;
  setHovered:Function;
  setClick: (condition: boolean) => void;
}

export interface PokemonItemProps {
  name: string,
  number: number
}

interface Names {
  name: string
}

export interface PokemonListProps{
  names: Array<Names>
}

export interface  NavbarProps {
  title: string,
}

export interface IQuery {
  isLoading : boolean,
  data : {
    data: {
      count: number
      results: Array<Names>
    }
  }
  isError: boolean,
  error: Error,
}