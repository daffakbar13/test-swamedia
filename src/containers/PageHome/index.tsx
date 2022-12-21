import { Grid } from "@mui/material";
import { capitalize, replace, startCase } from "lodash";
import { useQuery } from "react-query";
import { getMenu } from "../../api/masak-apa";
import { MediaList } from "../../components";

export default function PageHome() {
  const menu = useQuery("menu", getMenu);
  const defaultArr = [...new Array(10)];

  return (
    <Grid container spacing={2}>
      {menu.isSuccess
        ? [...menu.data.results].map((m, i) => (
            <Grid key={i} item xs={3}>
              <MediaList
                options={menu}
                data={{ title: startCase(m.key)
                  //  capitalize(m.key.split('-').join(' '))
                   , description: m.title }}
              />
            </Grid>
          ))
        : defaultArr.map((_, i) => (
            <Grid key={i} item xs={3}>
              <MediaList options={menu} data={{ title: "", description: "" }} />
            </Grid>
          ))}
    </Grid>
  );
}
