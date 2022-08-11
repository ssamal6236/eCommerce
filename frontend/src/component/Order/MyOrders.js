import React, { Fragment, useEffect } from "react";
import "./MyOrders.css";
import { DataGrid } from "@material-ui/data-grid";
import LaunchIcon from "@material-ui/icons/Launch";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, orders, error } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 150,
      flex: 0.4,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.2,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
        ? "greenColor" : "redColor"
      }
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 170,
      flex: 0.2,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 160,
      flex: 0.3,
    },
    {
      field: "orderDate",
      headerName: "Order Date",
      type: "number",
      minWidth: 190,
      flex: 0.4,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "number",
      minWidth: 130,
      flex: 0.2,
      sortable: false,
      renderCell: (params) => {
        return (
            
          //<Link to={`/order/${params.getValue(params.id, "id")}`} disable>
          <Link to={`/orders`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];
  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice.toFixed(2),
        orderDate: item.createdAt.substr(0, 10),
      });
    });

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, error]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <p className="myOrdersHeading">{user.name}'s Orders</p>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrderstable"
            autoHeight
          />

          
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
