from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Route for the main payment page
@app.route('/')
def index():
    return render_template('index.html')  # The HTML code from above

# Route for processing payments
@app.route('/process_payment', methods=['POST'])
def process_payment():
    payment_method = request.form.get('payment-method')

    if payment_method == 'UPI':
        # Handle UPI payment (mock response)
        return jsonify({'status': 'success', 'message': 'UPI payment successful. Please scan the QR code.'})

    elif payment_method == 'Cash':
        # Handle cash on delivery (mock response)
        return jsonify({'status': 'success', 'message': 'Cash on delivery selected. Your order will be delivered.'})

    return jsonify({'status': 'error', 'message': 'Invalid payment method.'})

if __name__ == "__main__":
    app.run(debug=True)
