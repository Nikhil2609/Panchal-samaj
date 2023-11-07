import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    Paper
} from "@material-ui/core";
import { client } from "../api/axios";
import { IUserResponse } from "../interface/IUser";
import { Table } from "../component/Table";
import AddUser from "./AddUser";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2)
    },
    filterSection: {
        marginBottom: theme.spacing(2)
    },
    filterButton: {
        marginLeft: theme.spacing(2)
    },
    paperBackground: {
        background: "#f5f5f5",
        padding: theme.spacing(2)
    },
    itemList: {
        listStyleType: "none",
        padding: 0,
        marginTop: theme.spacing(2)
    },
    listItem: {
        marginBottom: theme.spacing(1)
    }
}));

const ListingPage = () => {
    const classes = useStyles();
    const [listingScreen, setListingScreen] = useState(false);
    const [category, setCategory] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [users, setUsers] = useState<IUserResponse[]>([]);

    useEffect(() => {
        getUserListing()
    }, [])

    const handleCategoryChange = (event: any) => {
        setCategory(event?.target?.value);
    };

    const handleSearchInputChange = (event: any) => {
        setSearchValue(event?.target?.value);
    };

    const handleFilterClick = () => {
        // Perform filtering logic here
        // Example: Filtering based on category and search value
        const filtered: any = items.filter((item) => {
            if (category && item.category !== category) {
                return false;
            }
            if (searchValue && !item.name.includes(searchValue)) {
                return false;
            }
            return true;
        });
        setFilteredItems(filtered);
    };

    const handleResetClick = () => {
        setCategory("");
        setSearchValue("");
        setFilteredItems([]);
    };

    // Example data
    const items = [
        { id: 1, name: "Item 1", category: "electronics" },
        { id: 2, name: "Item 2", category: "clothing" },
        { id: 3, name: "Item 3", category: "books" }
        // Add more items here...
    ];

    const menuProps: any = {
        style: { maxHeight: "300px" },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };

    const getUserListing = async () => {
        const response = await client.get('user');
        const users: IUserResponse[] = response.data;
        console.log("result===>>>", users);
        setUsers(users);
    }

    const columns = ['id', 'name', 'address', 'mobile_no'];
    const data = [
        { id: 1, Name: 'John Doe', Address: 'Navrangpura', Mobile: '9988776655' },
        { id: 2, Name: 'Jane Smith', Address: 'Vastral', Mobile: '9876543210' },
        // Additional rows...
    ];

    const displayCreateUserScreen = () => {
        setListingScreen(false)
    }

    return (
        listingScreen ?
            <div className={classes.container}>
                <Grid container spacing={2} className={classes.filterSection}>
                    <Grid container justifyContent="center">
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={8}>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button
                                    variant="contained"
                                    onClick={() => displayCreateUserScreen()}
                                >
                                    Add User
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="category-label">Category</InputLabel>
                                <Select
                                    labelId="category-label"
                                    value={category}
                                    onChange={handleCategoryChange}
                                    MenuProps={menuProps}
                                >
                                    <MenuItem value="">All</MenuItem>
                                    <MenuItem value="electronics">Electronics</MenuItem>
                                    <MenuItem value="clothing">Clothing</MenuItem>
                                    <MenuItem value="books">Books</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="Search"
                                value={searchValue}
                                onChange={handleSearchInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleFilterClick}
                                className={classes.filterButton}
                            >
                                Filter
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleResetClick}
                                className={classes.filterButton}
                            >
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Paper className={classes.paperBackground}>
                    <Typography variant="h6">Listing items:</Typography>
                    {/* {users.length > 0 ? (
                    <ul className={classes.itemList}>
                        {users.map((user: IUserResponse) => (
                            <li key={user.id} className={classes.listItem}>
                                {user.id}, {user.name} , {user.address} ,{user.mobile_no}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Typography>No items found.</Typography>
                )} */}
                    <Table data={users} columns={columns} />
                </Paper>
            </div>
            :
            <AddUser />
    );
};

export default ListingPage;
