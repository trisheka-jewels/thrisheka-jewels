# from django.db import models


# class Announcement(models.Model):
#     title = models.CharField(max_length=200)
#     message = models.TextField()
#     is_active = models.BooleanField(default=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.title

# class Banner(models.Model):
#     title = models.CharField(max_length=200)
#     subtitle = models.CharField(max_length=300)
#     image = models.ImageField(upload_to="banners/")
#     link = models.CharField(max_length=200)
#     is_active = models.BooleanField(default=True)
#     order = models.IntegerField(default=0)

#     def __str__(self):
#         return self.title


# class Category(models.Model):
#     name = models.CharField(max_length=100)
#     slug = models.SlugField(unique=True)
#     image = models.ImageField(upload_to="categories/")
#     description = models.CharField(max_length=200)
#     is_active = models.BooleanField(default=True)   # 👈 important
#     order = models.IntegerField(default=0)

    
# class Product(models.Model):
#     name = models.CharField(max_length=200)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     image = models.ImageField(upload_to="products/")
#     category = models.ForeignKey("Category", on_delete=models.CASCADE)
#     is_featured = models.BooleanField(default=False)
#     is_active = models.BooleanField(default=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.name



from django.db import models


class Announcement(models.Model):
    title = models.CharField(max_length=200)
    message = models.TextField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Banner(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300)
    image = models.ImageField(upload_to="banners/")
    link = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to="categories/")
    description = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name   # 👈 THIS FIXES ADMIN DROPDOWN


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    discount_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True
    )

    image = models.ImageField(upload_to="products/")
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    is_out_of_stock = models.BooleanField(default=False)   # 👈 NEW

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    @property
    def final_price(self):
        return self.discount_price if self.discount_price else self.price



class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    rating = models.IntegerField(default=5)
    text = models.TextField()
    image = models.ImageField(upload_to="testimonials/", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class PromoCode(models.Model):
    code = models.CharField(max_length=50, unique=True)
    discount_percent = models.PositiveIntegerField()  # 10 = 10%
    min_order_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    is_active = models.BooleanField(default=True)
    valid_from = models.DateField()
    valid_to = models.DateField()

    def __str__(self):
        return self.code




from django.db import models

# class Order(models.Model):
#     STATUS_CHOICES = (
#         ("CREATED", "Created"),
#         ("PAID", "Paid"),
#         ("FAILED", "Failed"),
#     )

#     order_id = models.CharField(max_length=100, unique=True)
#     payment_id = models.CharField(max_length=100, blank=True, null=True)
#     status = models.CharField(max_length=10, choices=STATUS_CHOICES)

#     name = models.CharField(max_length=100)
#     phone = models.CharField(max_length=15)
#     address = models.TextField()
#     city = models.CharField(max_length=50)
#     state = models.CharField(max_length=50)
#     pincode = models.CharField(max_length=10)

#     subtotal = models.IntegerField()
#     discount = models.IntegerField(default=0)
#     total_amount = models.IntegerField()

#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.order_id

# class Order(models.Model):

#     PAYMENT_STATUS_CHOICES = (
#         ("CREATED", "Created"),
#         ("PAID", "Paid"),
#         ("FAILED", "Failed"),
#     )

#     ORDER_STATUS_CHOICES = (
#         ("PENDING", "Pending"),
#         ("PROCESSED", "Processed"),
#         ("SHIPPED", "Shipped"),
#         ("DELIVERED", "Delivered"),
#         ("CANCELLED", "Cancelled"),
#     )

#     order_id = models.CharField(max_length=100, unique=True)
#     payment_id = models.CharField(max_length=100, blank=True, null=True)

#     payment_status = models.CharField(
#         max_length=10,
#         choices=PAYMENT_STATUS_CHOICES
#     )

#     status = models.CharField(
#         max_length=10,
#         choices=ORDER_STATUS_CHOICES,
#         default="PENDING"
#     )

#     name = models.CharField(max_length=100)
#     phone = models.CharField(max_length=15)
#     address = models.TextField()
#     city = models.CharField(max_length=50)
#     state = models.CharField(max_length=50)
#     pincode = models.CharField(max_length=10)

#     subtotal = models.IntegerField()
#     discount = models.IntegerField(default=0)
#     total_amount = models.IntegerField()

#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.order_id



class Order(models.Model):

    PAYMENT_STATUS_CHOICES = (
        ("CREATED", "Created"),
        ("PAID", "Paid"),
        ("FAILED", "Failed"),
    )

    ORDER_STATUS_CHOICES = (
        ("PENDING", "Pending"),
        ("PROCESSED", "Processed"),
        ("SHIPPED", "Shipped"),
        ("DELIVERED", "Delivered"),
        ("CANCELLED", "Cancelled"),
    )

    order_id = models.CharField(max_length=100, unique=True)
    payment_id = models.CharField(max_length=100, blank=True, null=True)

    payment_status = models.CharField(
        max_length=10,
        choices=PAYMENT_STATUS_CHOICES,
        default="CREATED"   # ✅ IMPORTANT
    )

    status = models.CharField(
        max_length=10,
        choices=ORDER_STATUS_CHOICES,
        default="PENDING"
    )

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    address = models.TextField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=10)

    subtotal = models.IntegerField()
    discount = models.IntegerField(default=0)
    total_amount = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name="items", on_delete=models.CASCADE)
    product_name = models.CharField(max_length=200)
    quantity = models.IntegerField()
    price = models.IntegerField()
