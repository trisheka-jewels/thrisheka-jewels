from django.contrib import admin
from .models import Announcement,Banner,Category,Product,Testimonial,PromoCode
@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ("title", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("title", "message")




@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ("title", "is_active", "order")
    list_editable = ("is_active", "order")



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "is_active", "order")
    list_editable = ("is_active", "order")
    prepopulated_fields = {"slug": ("name",)}




@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name", "price", "discount_price",
        "is_out_of_stock", "is_featured", "is_active"
    )
    list_editable = ("is_out_of_stock", "is_featured", "is_active")
    list_filter = ("is_out_of_stock", "is_featured", "is_active", "category")


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("name", "rating", "is_active", "order")
    list_editable = ("is_active", "order")




@admin.register(PromoCode)
class PromoCodeAdmin(admin.ModelAdmin):
    list_display = ("code", "discount_percent", "min_order_amount", "is_active", "valid_from", "valid_to")
    list_filter = ("is_active",)
    search_fields = ("code",)


# from django.contrib import admin
# from .models import Order, OrderItem

# class OrderItemInline(admin.TabularInline):
#     model = OrderItem
#     extra = 0
#     readonly_fields = ("product_name", "quantity", "price")

# class OrderAdmin(admin.ModelAdmin):
#     list_display = (
#         "order_id",
#         "name",
#         "phone",
#         "status",
#         "total_amount",
#         "created_at",
#     )
#     list_filter = ("status", "created_at")
#     search_fields = ("order_id", "name", "phone")
#     inlines = [OrderItemInline]
#     readonly_fields = (
#         "order_id",
#         "payment_id",
#         "status",
#         "created_at",
#     )

# admin.site.register(Order, OrderAdmin)


# from django.contrib import admin
# from .models import Order, OrderItem

# class OrderItemInline(admin.TabularInline):
#     model = OrderItem
#     extra = 0
#     readonly_fields = ("product_name", "quantity", "price")

# class OrderAdmin(admin.ModelAdmin):
#     list_display = (
#         "order_id",
#         "name",
#         "phone",
#         "status",
#         "total_amount",
#         "created_at",
#     )
#     list_filter = ("status", "created_at")
#     search_fields = ("order_id", "name", "phone")
#     readonly_fields = ("order_id", "payment_id", "created_at")
#     inlines = [OrderItemInline]

# admin.site.register(Order, OrderAdmin)


from django.contrib import admin
from .models import Order, OrderItem


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ("product_name", "quantity", "price")


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "order_id",
        "name",
        "phone",
        "payment_status",   # ✅ MUST appear
        "status",
        "total_amount",
        "created_at",
    )

    list_filter = (
        "payment_status",
        "status",
        "created_at",
    )

    readonly_fields = (
        "order_id",
        "payment_id",
        "payment_status",   # ✅ FORCE admin to render it
        "created_at",
    )

    inlines = [OrderItemInline]
