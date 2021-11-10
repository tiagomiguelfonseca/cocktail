import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";
import CountBar from "../CountBar";
import { Box, CustomBiSearch, CustomRow, Form, Input } from "./style";

export default function Search() {
  const [queryKey, setQueryKey] = useState("");
  const [searchParams] = useSearchParams();

// const standardQuery = useDebounce(queryKey, 500)
  const navigate = useNavigate();


  function appendSearchParams(obj) {
    const sp = createSearchParams(searchParams);
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        sp.delete(key);
        value.forEach((v) => sp.append(key, v));
      } else if (value === undefined) {
        sp.delete(key);
      } else {
        sp.set(key, value);
      }
    });
    return sp;
  }

  return (
    <Fragment>
      <CustomRow>
        <Box>
          {/* <Form onSubmit={(e) => navigate(`/results/${queryKey}`)}> */}
          <Form onSubmit={(e) => navigate(`/results?${appendSearchParams({s: queryKey})}`)}>
          <Link to={`/results/${queryKey}`}><CustomBiSearch /></Link>
            <Input
              value={queryKey}
              type='text'
              placeholder='Search for a Cocktail ...'
              name='query'
              onChange={(e) => setQueryKey(e.target.value)}
            />
          </Form>
        </Box>
        <CountBar />
      </CustomRow>
    </Fragment>
  );
}
