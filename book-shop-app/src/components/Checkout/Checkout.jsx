import PropTypes from "prop-types";
import React, { Fragment } from "react";
import "./styleCheckout.css";

const Checkout = () => {
    return (
        <Fragment>


                <div className="checkout-area pt-95 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="billing-info-wrap">
                                    <h3>Thông tin đặt hàng</h3>
                                    <div className="row">
                                        <div>
                                            <div className="billing-info">
                                                <label>Họ</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="billing-info mb-20">
                                                <label>Tên</label>
                                                <input type="text" />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="billing-info mb-20">
                                                <label>Tỉnh / Thành phố</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="billing-info mb-20">
                                                <label>Quận / Huyện</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="billing-info mb-20">
                                                <label>Phường / Xã</label>
                                                <input type="text" />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="billing-info mb-20">
                                                <label>Địa chỉ cụ thể</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="billing-info mb-20">
                                                <label>Số điện thoại</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="billing-info mb-20">
                                                <label>Email</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4>Thông tin bổ sung</h4>
                                        <div className="additional-info">
                                            <label>Ghi chú</label>
                                            <textarea
                                                placeholder="Ghi chú cho cửa hàng và đơn vị vận chuyển "
                                                name="message"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="your-order-area">
                                    <h3> Đơn hàng của bạn </h3>
                                    <div className="your-order-wrap gray-bg-4">
                                        <div className="your-order-product-info">
                                            <div className="your-order-top">
                                                <ul>
                                                    <li>Sản phẩm</li>
                                                    <li>Đơn giá</li>
                                                </ul>
                                            </div>
                                            <div className="your-order-middle">
                                                <ul>

                                                    <li>
                                  <span className="order-middle-left">
                                    Cây cam ngọt của tôi X 1
                                  </span>{" "}
                                                        <span className="order-price">
                                   100.000vnđ
                                  </span>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="your-order-bottom">
                                                <ul>
                                                    <li className="your-order-shipping">Phí vận chuyển</li>
                                                    <li>Miễn phí</li>
                                                </ul>
                                            </div>
                                            <div className="your-order-total">
                                                <ul>
                                                    <li className="order-total">Tổng</li>
                                                    <li>
                                                        100.000vnđ
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="payment-method"></div>
                                    </div>
                                    <div className="place-order mt-25">
                                        <button className="btn-hover">Đặt hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </Fragment>

    )
}

export default Checkout