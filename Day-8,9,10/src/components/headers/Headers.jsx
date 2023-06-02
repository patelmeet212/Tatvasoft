import { useMemo, useState } from "react";
import { NavigationItems } from "../../utils/shared";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../utils/enum";
import siteLogo from "../../assets/images/tatvasoftLogo.svg";
import headerStyles from "./headerStyle.module.css";
import { List, ListItem, Button, Breadcrumbs, TextField, DialogContent } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import bookService from "../../services/book.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Headers = () => {
  const open = false;
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const items = useMemo(() => {
    return NavigationItems;
  });

  const searchBook = async () => {
    const res = await bookService.searchBook(query);
    setBookList(res);
    console.log(res);
  };

  const search = async () => {
    await searchBook();
    setOpenSearchResult(true);
    setOverlay(true);
  };

  return (
    <div>
      <div className={headerStyles.redLine}></div>
      <div className={headerStyles.header}>
        <div className={headerStyles.tatvasoftLogoClass}>
          <Link to={RoutePaths.Home}>
            <img src={siteLogo} width="180" alt="tatvasoft.svg"></img>
          </Link>
        </div>
        <div className={headerStyles.headerLinks}>
          <div style={{ color: "#f14d54" }}>
            <Link
              style={{
                color: "#f14d54",
                textDecoration: "none",
              }}
              to={RoutePaths.Login}
            >
              Login
            </Link>
          </div>
          <span
            style={{
              color: "#999999",
              fontWeight: 100,
            }}
          >
            |
          </span>
          <div style={{ color: "#f14d54" }}>
            <Link
              style={{
                color: "#f14d54",
                textDecoration: "none",
              }}
              to={RoutePaths.Register}
            >
              Register
            </Link>
          </div>
          <Breadcrumbs separator="|" aria-label="breadcrumb">
            {items.map((item, index) => (
              <div key={index}>
                <Link
                  style={{
                    color: "#f14d54",
                    textDecoration: "none",
                  }}
                  to={item.route}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </Breadcrumbs>
        </div>
        <div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "#f14d54",
              boxShadow: "0 0 0 0",
              border: 1,
              borderStyle: "solid",
              borderColor: "#999999",
              marginLeft: 10,
              textTransform: "capitalize",
            }}
            onClick={() => {
              console.log("Cart button clicked!");
            }}
          >
            <ShoppingCartIcon />
            <span
              style={{
                paddingLeft: 5,
                paddingRight: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              0
            </span>
            <span style={{ color: "black" }}> Cart </span>
          </Button>
        </div>
        <div className={headerStyles.logout}>Log out</div>
        <div className={headerStyles.emptySpaceRight}></div>
      </div>
      <div className={headerStyles.searchContainer}>
        <div>
          <TextField
            variant="outlined"
            placeholder="What you are looking for..."
            value={query}
            style={{
              width: 550,
              backgroundColor: "#f5f5f5",
              borderRadius: 5,
              marginRight: 10,
            }}
            size="small"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          ></TextField>
          <div>
            {openSearchResult && (
              <div className={headerStyles.searchResults}>
                {bookList?.length === 0 && (
                  <p className={headerStyles.noProduct}>No Product Found</p>
                )}
                {bookList?.length > 0 &&
                  bookList.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={headerStyles.singleBookDetails}
                      >
                        <div className={headerStyles.bookDetailsLeft}>
                          <div>{item.name}</div>
                          <div className={headerStyles.itemDescription}>
                            {item.description}
                          </div>
                        </div>
                        <div className={headerStyles.bookDetailsright}>
                          <div style={{ textAlign: "right" }}>{item.price}</div>
                          <div>
                            <Link
                              to="/addtocart"
                              style={{
                                color: "#f14d54",
                                textDecoration: "none",
                              }}
                            >
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={search}
            style={{
              backgroundColor: "#f14d54",
              width: 130,
              height: 40,
              color: "white",
              textTransform: "capitalize",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: 20 }}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <span style={{ paddingLeft: 5 }}>Search</span>
          </Button>
        </div>
      </div>
      <div>
        {overlay && (
          <div
            className={headerStyles.overlay}
            onClick={() => {
              setOpenSearchResult(false);
              setOverlay(false);
            }}
          ></div>
        )}
      </div>
    </div>
  );
};
