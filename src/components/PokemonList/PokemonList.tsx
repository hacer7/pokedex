import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "../PokemonItem";
import { Input, PaginationProps } from "antd";
import { Pagination, Spin } from "antd";
import s from "./style.module.scss";
import { IPokemon } from "../model";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [offset, setOffset] = useState(0);
  const [serverRes, setServerRes] = useState();
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('')

  async function fetchPokemons() {
    setLoading(true);
    axios
      .get(
        !searchValue ? 
        `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}` : 
        'https://pokeapi.co/api/v2/pokemon?limit=10249'
      )
      .then((res) => {
        setPokemons(res.data.results.filter((pokemon : IPokemon) => pokemon.name.includes(searchValue)));
        setServerRes(res.data.count);
      });
      setLoading(false);
  }

  useEffect(() => {
    fetchPokemons()
  }, [current, pageSize, searchValue]);

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setPageSize(pageSize);
    setCurrent(current);
    setOffset((current - 1) * pageSize);
  };

  return (
    <>
      <div className={s.pag}> 
        {!searchValue ? <Pagination
            onChange={onShowSizeChange}
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={0}
            total={serverRes} /> : <p> Покемони по вашому запиту</p>} 
          <Input placeholder="Search Pokemon" className={s.inp} onChange={event => {
                  setSearchValue(event.target.value)
              }}/>
      </div>
      {loading ?  <div className={s.loader}><Spin tip="Loading..." size="large"/></div> : <div className={s.container}>
        {pokemons.map((pokemon, index) => (
          <PokemonItem pokemon={pokemon} key={index} />
        ))}
      </div>}
    </>
  );
}

export default PokemonList;
