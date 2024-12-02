import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def calculate(request):
    if request.method == "GET":
        return JsonResponse({"message": "Use POST to send calculations."}, status=200)


    if request.method == "POST":
        try:
            # Debug the raw request body
            print("Raw Request Body:", request.body)

            # Parse JSON body
            data = json.loads(request.body)
            print("Parsed Data:", data)

            # Extract fields
            first_number = data.get("firstNumber")
            second_number = data.get("secondNumber")
            operation = data.get("operation")

            if first_number is None or second_number is None or operation is None:
                return JsonResponse({"error": "Missing required fields"}, status=400)

            first_number = float(first_number)
            second_number = float(second_number)

            # Perform calculation
            if operation == "Addition":
                result = first_number + second_number
            elif operation == "Subtraction":
                result = first_number - second_number
            elif operation == "Multiplication":
                result = first_number * second_number
            elif operation == "Division":
                if second_number == 0:
                    return JsonResponse({"error": "Division by zero is not allowed"}, status=400)
                result = first_number / second_number
            else:
                return JsonResponse({"error": "Invalid operation"}, status=400)

            return JsonResponse({"result": result}, status=200)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)
        except Exception as e:
            print("Exception:", str(e))  # Debug unexpected errors
            return JsonResponse({"error": "An unexpected error occurred"}, status=500)

    return JsonResponse({"error": "Invalid HTTP method"}, status=405)
