# # from django.http import HttpResponse
# # from .models import Banner,Category,Product
# # from django.http import JsonResponse

# # def home(request):
# #     return HttpResponse("Backend API is running")

# # from django.http import JsonResponse
# # from .models import Announcement

# # def announcements(request):
# #     data = list(
# #         Announcement.objects.filter(is_active=True)
# #         .values("id", "title", "message", "created_at")
# #         .order_by("-created_at")
# #     )
# #     return JsonResponse(data, safe=False)



# # def banners(request):
# #     data = list(
# #         Banner.objects.filter(is_active=True)
# #         .order_by("order")
# #         .values("id", "title", "subtitle", "image", "link")
# #     )

# #     for b in data:
# #         b["image"] = request.build_absolute_uri("/media/" + b["image"])

# #     return JsonResponse(data, safe=False)


# # def categories(request):
# #     data = list(
# #         Category.objects.filter(is_active=True)
# #         .order_by("order")
# #         .values("id", "name", "slug", "image", "description")
# #     )

# #     for c in data:
# #         c["image"] = request.build_absolute_uri("/media/" + c["image"])

# #     return JsonResponse(data, safe=False)



# # def featured_products(request):
# #     data = list(
# #         Product.objects.filter(is_active=True, is_featured=True)
# #         .order_by("-created_at")[:6]
# #         .values("id", "name", "price", "image", "category__slug")
# #     )

# #     for p in data:
# #         p["image"] = request.build_absolute_uri("/media/" + p["image"])

# #     return JsonResponse(data, safe=False)


# from django.http import HttpResponse, JsonResponse
# from .models import Banner, Category, Product, Announcement

# # Test route
# def home(request):
#     return HttpResponse("Backend API is running")


# # ------------------ ANNOUNCEMENTS ------------------
# def announcements(request):
#     data = list(
#         Announcement.objects.filter(is_active=True)
#         .values("id", "title", "message", "created_at")
#         .order_by("-created_at")
#     )
#     return JsonResponse(data, safe=False)


# # ------------------ BANNERS ------------------
# def banners(request):
#     data = list(
#         Banner.objects.filter(is_active=True)
#         .order_by("order")
#         .values("id", "title", "subtitle", "image", "link")
#     )

#     for b in data:
#         b["image"] = request.build_absolute_uri("/media/" + b["image"])

#     return JsonResponse(data, safe=False)


# # ------------------ CATEGORIES ------------------
# def categories(request):
#     data = list(
#         Category.objects.filter(is_active=True)
#         .order_by("order")
#         .values("id", "name", "slug", "image", "description")
#     )

#     for c in data:
#         c["image"] = request.build_absolute_uri("/media/" + c["image"])

#     return JsonResponse(data, safe=False)


# # ------------------ FEATURED PRODUCTS ------------------
# def featured_products(request):
#     data = list(
#         Product.objects.filter(
#             is_active=True,
#             is_featured=True,
#             category__is_active=True   # 👈 important
#         )
#         .order_by("-created_at")[:6]
#         .values("id", "name", "price", "image", "category__slug")
#     )

#     for p in data:
#         p["image"] = request.build_absolute_uri("/media/" + p["image"])

#     return JsonResponse(data, safe=False)


# # ------------------ CATEGORY PRODUCTS ------------------
# def category_products(request, slug):
#     data = list(
#         Product.objects.filter(
#             category__slug=slug,
#             is_active=True,
#             category__is_active=True
#         )
#         .values("id", "name", "price", "image", "category__slug","category__name" )
#     )

#     for p in data:
#         p["image"] = request.build_absolute_uri("/media/" + p["image"])

#     return JsonResponse(data, safe=False)



from django.http import HttpResponse, JsonResponse
from .models import Banner, Category, Product, Announcement,Testimonial


# ------------------ HOME ------------------
def home(request):
    return HttpResponse("Backend API is running")


# ------------------ ANNOUNCEMENTS ------------------
def announcements(request):
    data = list(
        Announcement.objects.filter(is_active=True)
        .values("id", "title", "message", "created_at")
        .order_by("-created_at")
    )
    return JsonResponse(data, safe=False)


# ------------------ BANNERS ------------------
def banners(request):
    data = list(
        Banner.objects.filter(is_active=True)
        .order_by("order")
        .values("id", "title", "subtitle", "image", "link")
    )

    for b in data:
        b["image"] = request.build_absolute_uri("/media/" + b["image"])

    return JsonResponse(data, safe=False)


# ------------------ CATEGORIES ------------------
def categories(request):
    data = list(
        Category.objects.filter(is_active=True)
        .order_by("order")
        .values("id", "name", "slug", "image", "description")
    )

    for c in data:
        c["image"] = request.build_absolute_uri("/media/" + c["image"])

    return JsonResponse(data, safe=False)


# ------------------ FEATURED PRODUCTS ------------------
def featured_products(request):
    data = list(
        Product.objects.filter(
            is_active=True,
            is_featured=True,
            category__is_active=True
        )
        .order_by("-created_at")[:6]
        .values(
            "id",
            "name",
            "price",
            "discount_price",
            "is_out_of_stock",
            "image",
            "category__slug"
        )
    )

    for p in data:
        p["image"] = request.build_absolute_uri("/media/" + p["image"])

    return JsonResponse(data, safe=False)


# ------------------ CATEGORY PRODUCTS ------------------
def category_products(request, slug):
    data = list(
        Product.objects.filter(
            category__slug=slug,
            is_active=True,
            category__is_active=True
        )
        .values(
            "id",
            "name",
            "price",
            "discount_price",
            "is_out_of_stock",
            "image",
            "category__slug",
            "category__name"
        )
    )

    for p in data:
        p["image"] = request.build_absolute_uri("/media/" + p["image"])

    return JsonResponse(data, safe=False)



def testimonials(request):
    data = list(
        Testimonial.objects.filter(is_active=True)
        .order_by("order")
        .values("id", "name", "location", "rating", "text", "image")
    )

    for t in data:
        if t["image"]:
            t["image"] = request.build_absolute_uri("/media/" + t["image"])
        else:
            t["image"] = ""

    return JsonResponse(data, safe=False)

from datetime import date
from .models import PromoCode
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def apply_promo(request):
    body = json.loads(request.body)
    code = body.get("code")
    total = float(body.get("total"))

    try:
        promo = PromoCode.objects.get(
            code__iexact=code,
            is_active=True,
            valid_from__lte=date.today(),
            valid_to__gte=date.today(),
        )
    except PromoCode.DoesNotExist:
        return JsonResponse({"error": "Invalid promo code"}, status=400)

    if total < promo.min_order_amount:
        return JsonResponse({"error": f"Minimum order ₹{promo.min_order_amount}"}, status=400)

    discount = (promo.discount_percent / 100) * total
    new_total = total - discount

    return JsonResponse({
        "code": promo.code,
        "discount": round(discount, 2),
        "new_total": round(new_total, 2)
    })



# import razorpay
# from django.conf import settings
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from .models import Order, OrderItem

# client = razorpay.Client(
#     auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
# )

# @api_view(["POST"])
# def create_order(request):
#     data = request.data

#     try:
#         razorpay_order = client.order.create({
#             "amount": int(data["total"]) * 100,  # paise
#             "currency": "INR",
#             "payment_capture": 1,
#         })

#         order = Order.objects.create(
#             order_id=razorpay_order["id"],
#             status="CREATED",
#             name=data["name"],
#             phone=data["phone"],
#             address=data["address"],
#             city=data["city"],
#             state=data["state"],
#             pincode=data["pincode"],
#             subtotal=data["subtotal"],
#             discount=data["discount"],
#             total_amount=data["total"],
#         )

#         for item in data["items"]:
#             OrderItem.objects.create(
#                 order=order,
#                 product_name=item["name"],
#                 quantity=item["quantity"],
#                 price=item["price"],
#             )

#         return Response({
#             "order_id": razorpay_order["id"],
#             "amount": razorpay_order["amount"],
#             "currency": "INR",
#         })

#     except Exception as e:
#         return Response(
#             {"error": str(e)},
#             status=status.HTTP_400_BAD_REQUEST
#         )



# @api_view(["POST"])
# def verify_payment(request):
#     data = request.data

#     try:
#         client.utility.verify_payment_signature({
#             "razorpay_order_id": data["razorpay_order_id"],
#             "razorpay_payment_id": data["razorpay_payment_id"],
#             "razorpay_signature": data["razorpay_signature"],
#         })

#         order = Order.objects.get(order_id=data["razorpay_order_id"])
#         order.payment_id = data["razorpay_payment_id"]
#         order.status = "PAID"
#         order.save()

#         return Response({"success": True})

#     except Exception as e:
#         return Response(
#             {"success": False, "error": str(e)},
#             status=status.HTTP_400_BAD_REQUEST
#         )


import razorpay
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .models import Order, OrderItem

# Razorpay client
client = razorpay.Client(
    auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
)

# -----------------------------
# CREATE ORDER (BEFORE PAYMENT)
# -----------------------------
# @api_view(["POST"])
# @permission_classes([AllowAny])
# def create_order(request):
#     data = request.data

#     try:
#         # 🔒 SAFELY CONVERT TOTALS
#         subtotal = int(float(data.get("subtotal", 0)))
#         discount = int(float(data.get("discount", 0)))
#         total_amount = int(float(data.get("total", 0)))

#         # 1️⃣ Create Razorpay order
#         razorpay_order = client.order.create({
#             "amount": total_amount * 100,  # convert to paise
#             "currency": "INR",
#             "payment_capture": 1,
#         })

#         # 2️⃣ Save Order in DB
#         order = Order.objects.create(
#             order_id=razorpay_order["id"],
#             status="CREATED",
#             name=data["name"],
#             phone=data["phone"],
#             address=data["address"],
#             city=data["city"],
#             state=data["state"],
#             pincode=data["pincode"],
#             subtotal=subtotal,
#             discount=discount,
#             total_amount=total_amount,
#         )

#         # 3️⃣ Save Order Items (🔥 FIXED PRICE ISSUE)
#         for item in data["items"]:
#             OrderItem.objects.create(
#                 order=order,
#                 product_name=item["name"],
#                 quantity=int(item["quantity"]),
#                 price=int(float(item["price"])),  # ✅ FIX HERE
#             )

#         # 4️⃣ Send response to frontend
#         return Response({
#             "order_id": razorpay_order["id"],
#             "amount": razorpay_order["amount"],
#             "currency": "INR",
#         })

#     except Exception as e:
#         return Response(
#             {"error": str(e)},
#             status=status.HTTP_400_BAD_REQUEST
#         )



# @api_view(["POST"])
# @permission_classes([AllowAny])
# def create_order(request):
#     data = request.data

#     try:
#         subtotal = int(float(data.get("subtotal", 0)))
#         discount = int(float(data.get("discount", 0)))
#         total_amount = subtotal - discount

#         if total_amount <= 0:
#             return Response(
#                 {"error": "Invalid order amount"},
#                 status=status.HTTP_400_BAD_REQUEST
#             )

#         # Create Razorpay order (amount in paise)
#         razorpay_order = client.order.create({
#             "amount": total_amount * 100,
#             "currency": "INR",
#             "payment_capture": 1,
#         })

#         # Save Order
#         order = Order.objects.create(
#             order_id=razorpay_order["id"],
#             status="CREATED",
#             name=data["name"],
#             phone=data["phone"],
#             address=data["address"],
#             city=data["city"],
#             state=data["state"],
#             pincode=data["pincode"],
#             subtotal=subtotal,
#             discount=discount,
#             total_amount=total_amount,
#         )

#         # Save Order Items
#         for item in data["items"]:
#             OrderItem.objects.create(
#                 order=order,
#                 product_name=item["name"],
#                 quantity=int(item["quantity"]),
#                 price=int(float(item["price"])),
#             )

#         return Response({
#             "order_id": razorpay_order["id"],
#             "amount": razorpay_order["amount"],
#             "currency": "INR",
#         })

#     except Exception as e:
#         return Response(
#             {"error": str(e)},
#             status=status.HTTP_400_BAD_REQUEST
#         )




from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Order, OrderItem

@api_view(["POST"])
@permission_classes([AllowAny])
def create_order(request):
    data = request.data

    try:
        subtotal = int(float(data.get("subtotal", 0)))
        discount = int(float(data.get("discount", 0)))
        total_amount = subtotal - discount

        if total_amount <= 0:
            return Response(
                {"error": "Invalid order amount"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Create Razorpay order (amount in paise)
        razorpay_order = client.order.create({
            "amount": total_amount * 100,
            "currency": "INR",
            "payment_capture": 1,
        })

        # ✅ Save Order with NEW fields
        order = Order.objects.create(
            order_id=razorpay_order["id"],
            payment_status="CREATED",  # 👈 payment status
            status="PENDING",          # 👈 order status
            name=data["name"],
            phone=data["phone"],
            address=data["address"],
            city=data["city"],
            state=data["state"],
            pincode=data["pincode"],
            subtotal=subtotal,
            discount=discount,
            total_amount=total_amount,
        )

        # Save Order Items
        for item in data["items"]:
            OrderItem.objects.create(
                order=order,
                product_name=item["name"],
                quantity=int(item["quantity"]),
                price=int(float(item["price"])),
            )

        return Response({
            "order_id": razorpay_order["id"],
            "amount": razorpay_order["amount"],
            "currency": "INR",
        })

    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )

# -----------------------------
# VERIFY PAYMENT (AFTER PAYMENT)
# -----------------------------
# @api_view(["POST"])
# @permission_classes([AllowAny])
# def verify_payment(request):
#     data = request.data

#     try:
#         # 1️⃣ Verify Razorpay signature
#         client.utility.verify_payment_signature({
#             "razorpay_order_id": data["razorpay_order_id"],
#             "razorpay_payment_id": data["razorpay_payment_id"],
#             "razorpay_signature": data["razorpay_signature"],
#         })

#         # 2️⃣ Update Order status
#         order = Order.objects.get(order_id=data["razorpay_order_id"])
#         order.payment_id = data["razorpay_payment_id"]
#         order.status = "PAID"
#         order.save()

#         return Response({"success": True})

#     except Exception as e:
#         return Response(
#             {"success": False, "error": str(e)},
#             status=status.HTTP_400_BAD_REQUEST
#         )


# @api_view(["POST"])
# @permission_classes([AllowAny])
# def verify_payment(request):
#     print("VERIFY PAYMENT DATA:", request.data)

#     try:
#         client.utility.verify_payment_signature({
#             "razorpay_order_id": request.data["razorpay_order_id"],
#             "razorpay_payment_id": request.data["razorpay_payment_id"],
#             "razorpay_signature": request.data["razorpay_signature"],
#         })

#         order = Order.objects.get(order_id=request.data["razorpay_order_id"])
#         order.payment_id = request.data["razorpay_payment_id"]
#         order.status = "PAID"
#         order.save()

#         return Response({"success": True})

#     except Exception as e:
#         print("VERIFY ERROR:", str(e))
#         return Response({"success": False, "error": str(e)}, status=400)


# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .models import Order
# from .serializers import OrderSerializer

# @api_view(["GET"])
# def all_orders(request):
#     orders = Order.objects.all().order_by("-created_at")
#     serializer = OrderSerializer(orders, many=True)
#     return Response(serializer.data)



from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Order

@api_view(["POST"])
@permission_classes([AllowAny])
def verify_payment(request):
    print("VERIFY PAYMENT DATA:", request.data)

    try:
        client.utility.verify_payment_signature({
            "razorpay_order_id": request.data["razorpay_order_id"],
            "razorpay_payment_id": request.data["razorpay_payment_id"],
            "razorpay_signature": request.data["razorpay_signature"],
        })

        order = Order.objects.get(order_id=request.data["razorpay_order_id"])
        order.payment_id = request.data["razorpay_payment_id"]
        order.payment_status = "PAID"   # ✅ FIXED
        order.save()

        return Response({"success": True}, status=status.HTTP_200_OK)

    except Exception as e:
        print("VERIFY ERROR:", str(e))
        return Response(
            {"success": False, "error": str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )



from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Order
from .serializers import OrderSerializer

@api_view(["GET"])
def all_orders(request):
    orders = Order.objects.all().order_by("-created_at")
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)
