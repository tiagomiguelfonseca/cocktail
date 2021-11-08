import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import CountBar from "../CountBar";
import { Box, CustomBiSearch, CustomRow, Form, Input } from "./style";

export default function Search() {
  const [queryKey, setQueryKey] = useState("");

  const navigate = useNavigate();

  return (
    <Fragment>
      <CustomRow>
        <Box>
          <Form onSubmit={(e) => navigate(`/results/${queryKey}`)}>
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
