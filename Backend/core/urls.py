# from django.urls import path
# from . import views

# urlpatterns = [
#     path("announcements/", views.announcements, name="announcements"),
#     path("banners/", views.banners, name="banners"),
#     path("categories/", views.categories, name="categories"),
#     path("featured-products/", views.featured_products, name="featured-products"),
#     path("category/<slug:slug>/", views.category_products, name="category-products"),
#     path("testimonials/", views.testimonials, name="testimonials"),
#     path("apply-promo/", views.apply_promo, name="apply_promo"),
#     path("create-order/", create_order),
#     path("verify-payment/", verify_payment),
# ]


from django.urls import path
from . import views

urlpatterns = [
    path("announcements/", views.announcements, name="announcements"),
    path("banners/", views.banners, name="banners"),
    path("categories/", views.categories, name="categories"),
    path("featured-products/", views.featured_products, name="featured-products"),
    path("category/<slug:slug>/", views.category_products, name="category-products"),
    path("testimonials/", views.testimonials, name="testimonials"),
    path("apply-promo/", views.apply_promo, name="apply_promo"),

    # ✅ PAYMENT
    path("create-order/", views.create_order, name="create_order"),
    path("verify-payment/", views.verify_payment, name="verify_payment"),
    path("orders/",views.all_orders, name="orders"),

]
